$(document).ready(function() {
  var actual;
  // Listen events
  $('#btn-graph').click(function() {
    // Graph friends
    var user = $(this).data('user');
    actual = user;
    getPhriend(user);
  });
  $('#btn-list').click(function() {
    // List friends
    $('#btn-list').addClass('hide');
    $('#btn-graph').removeClass('hide');
    $('#table').removeClass('hide');
    $('#nodes').addClass('hide');
  });
  $('.btn-view').click(function() {
    // Show friends
    console.log('Show friends');
  });
  // Call AJAX
  function getPhriend(user) {
    $.getJSON('/api/users/' + user + '/friends', function(data) {
      $('#btn-list').removeClass('hide');
      $('#btn-graph').addClass('hide');
      $('#table').addClass('hide');
      $('#nodes').removeClass('hide');
      graPhriend(data.nodes, data.edges);
    });
  }
  // Graph nodes
  function graPhriend(node, edge) {
    var nodes = new vis.DataSet(node);
    var edges = new vis.DataSet(edge);
    var container = document.getElementById('nodes');
    var data = {
      nodes: nodes,
      edges: edges
    };
    var options = {
      nodes: {
        font: {
          color:'#34495E'
        }
      },
      edges: {
        color: '#00897B'
      }
    };
    var network = new vis.Network(container, data, options);
    network.on("click", function (params) {
      if(params.nodes.length) {
        var user = params.nodes[0];
        if(actual !== user) {
          actual = user;
          getPhriend(user);
        }
      }
    });
  }
});
