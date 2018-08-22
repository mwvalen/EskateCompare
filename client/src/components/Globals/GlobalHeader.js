import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { Menu, Icon, Grid, Image, Button, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({...state.main});

const mapDispatchToProps = function(dispatch) {

}

class GlobalHeader extends Component {

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
          <Link to="/">
            <Header size='huge'>{this.props.appName}</Header>
          </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);
