import "./style.scss";

import { formattedTimeStamp } from "@utils/basic.util";
import React from "react";

import LotShowPanel from "../panel";

export const Timeline = ({ activities }) => (
  <LotShowPanel icon="🕓" title="Activity(s)" count={activities.length}>
    <div className="eco--timeline-container">
      <ul className="eco--timeline-container-list">
        {activities.reverse().map(activity => (
          <Event key={activity.id} activity={activity} />
        ))}
      </ul>
    </div>
  </LotShowPanel>
);

const Event = ({ activity }) => (
  <li className="event">
    <label className="icon" />
    <div className="body">
      <p className="title">{activity.activityType.toUpperCase()}</p>
      <div className="description">
        {getMessage(activity.activityType, activity.activityValue)}
        {activity.note && (
          <>
            <br />
            🗒️ {activity.note}
          </>
        )}
      </div>
      <div className="user mt-3">
        &mdash;&emsp;User {activity.userId} on {formattedTimeStamp()}
      </div>
    </div>
  </li>
);

const getMessage = (type, value) => {
  switch (type) {
    case "lotCreation":
      return (
        <>
          🚚 Created <span>Lot</span> named <span>{value}</span>
        </>
      );

    default:
      return type.toLowerCase().includes("time") ? (
        <>
          🕓 Updated Time
          <span>{type}</span> &rarr;
          <span>{formattedTimeStamp(value)}</span>
        </>
      ) : (
        <>
          ✏️ Updated
          <span>{type}</span> &rarr;
          <span>{value}</span>
        </>
      );
      break;
  }
};
