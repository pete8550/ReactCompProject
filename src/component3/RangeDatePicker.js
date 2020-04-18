import React from "react";
import {
  RangeDatePicker
} from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";

export default function DatePicker() {
  return (
    <div className="App">
      <RangeDatePicker
        startDate={new Date(2020, 3, 7)}
        endDate={new Date(2020, 4, 7)}
      />
    </div>
  );
}
