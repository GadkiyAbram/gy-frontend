import React, {Component} from 'react';
import {observer} from 'mobx-react';
import BatteryPageView from './BatteryPageView';
import BatteryStore from "../../stores/batteries/BatteryStore";

class BatteryPage extends Component {
  batteryStore;

  constructor(props) {
    super(props);

    this.batteryStore = new BatteryStore();
  }

  render() {
    const {
      batteries,
      getBatteryData,
      limit,
      setOffset,
      total,
      updateCondition,
      batteryTabs
    } = this.batteryStore;

    return (
      <BatteryPageView
        batteryData={batteries}
        getData={getBatteryData}
        updateCondition={updateCondition}
        setOffset={setOffset}
        limit={limit}
        total={total}
        batteryTabs={batteryTabs}
      />
    )
  }
}

export default observer(BatteryPage);