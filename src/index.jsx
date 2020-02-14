var name = React.createElement('h1', {}, 'German Beer');
var brand = React.createElement('h3', {}, 'Holsten');
var price = React.createElement('h3', {}, '5$');
var alcoholContent = React.createElement('h3', {}, "30%");
var app = React.createElement('div', {}, name, brand, price, alcoholContent);

ReactDOM.render(
  app,
  document.getElementById('react-app-root')
);
