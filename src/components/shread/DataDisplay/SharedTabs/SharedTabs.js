import React from 'react';
import {
  Tabs,
  Tab,
  Paper
} from '@material-ui/core';
import PropTypes from 'prop-types';
import s from './styles.module.scss'

const SharedTabs = ({tabs}) => {
  return (
    <Paper>
      <Tabs>
        {
          tabs.map(({label, idx}) =>
            <Tab
              key={idx}
              label={label}
              className={s.tab}
            />
          )
        }
      </Tabs>
    </Paper>
  )
}

SharedTabs.propTypes = {
  tabs: PropTypes.array
}

export default SharedTabs;