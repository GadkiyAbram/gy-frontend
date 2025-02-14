import React from 'react';
import BatteryInfo from './components/Fields/BatteryInfo';
import BatteryEdit from "./components/Actions/Edit";
import BatteryConditionPage from "./components/Fields/Condition/BatteryConditionPage";

const columns = [
  {
    title: 'Condition',
    key: 'condition',
    format: (row) => <BatteryConditionPage row={row}/>
  },
  {
    title: 'Battery Info',
    key: 'serialOne',
    format: (row) => <BatteryInfo serialOne={row} />
  },
  {
    title: 'Arrived Date',
    key: 'arrived'
  },
  {
    title: 'Invoice',
    key: 'invoice'
  },
  {
    title: 'CCD',
    key: 'ccd'
  },
  {
    title: 'Location',
    key: 'location'
  },
  {
    title: 'Container',
    key: 'container'
  },
  {
    title: 'Edit',
    key: 'edit',
    format: () => <BatteryEdit />
  }
];

export default columns;