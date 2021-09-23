import React from 'react'
import Activities from './Activities'
import ActivityHeader from './ActivityHeader'
import Tabs from './tab'
import TabPane from './tab-pane'

const Main = () => {
    return (
        <div className = "main">
        <Tabs>
          <TabPane name = {"FEED"}  key="1">
            <ActivityHeader/>
            <Activities/>
          </TabPane>
          <TabPane name = "COMMUNITIES">
            Content of Tab Pane 2
          </TabPane>
        <TabPane name = "MESSAGES">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>


    )
}

export default Main
