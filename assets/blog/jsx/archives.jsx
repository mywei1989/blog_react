var ArchiveList = React.createClass({
  getInitialState: function() {
    return {
      loading: true,
      error: null,
      data: null
    };
  },

  componentDidMount() {
    this.props.promise.then(
      value => this.setState({loading: false, data: value}),
      error => this.setState({loading: false, error: error}));
  },

  render: function() {
      if(this.state.loading){
        return <span>Loading...</span>
      }else if(this.state.error != null){
        return <span>Error:{this.state.error.message}</span>
      }else{
        var archives = this.state.data;
        var archivelist = archives.map(function (archive) {
          return (
            <li class="archive-list-item">
              <a class="archive-list-link" href="/{archive.year}/{archive.month}/">{archive.monthFormat}</a>
              <span class="archive-list-count">{archive.count}</span>
            </li>
          );
        });
        return (
          <ul class="archive-list">
            {archivelist}
          </ul>
        );
      }
  }
});