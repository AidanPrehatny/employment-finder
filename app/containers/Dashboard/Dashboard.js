import React from 'react';
import { Helmet } from 'react-helmet';

import AniGrid from '../hoc/AniGrid';
import UserFolders from '../UserFolders/Loadable';
import VaultColumn from '../../components/vaultColumn/vaultColumn';
import UserUpdates from '../../components/UserUpdates/UserUpdates';
import './style.scss';

// OPTIMIZE: React.PureComponent
export default class Dashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        <Helmet>
          <title>Dashboard</title>
          <meta name="description" content="Discover ANi Dashboard" />
        </Helmet>
        <AniGrid Left={VaultColumn} Middle={UserFolders} Right={UserUpdates} />
      </main>
    );
  }
}