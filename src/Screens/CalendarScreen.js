import * as React from 'react';
import { View, Text } from 'react-native';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key:'workout', color: 'green'};


function CalendarScreen() {
  return (
    <View style={{width: '100%', backgroundColor: 'black'}}>
      <CalendarList
  // Enable horizontal scrolling, default = false
  horizontal={true}
  // Enable paging on horizontal, default = false
  pagingEnabled={true}
  // Set custom calendarWidth.

/>

    </View>
  );
}

export default CalendarScreen;