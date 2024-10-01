import { useState } from 'react';
import globalStyle from '../../app/global.module.css';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import OfferingItem from '../offeringItem';
import style from "./offerings.module.css";
import { offerings } from '../offeringObj';
import { Offer } from '../offeringObj';

export default function DeskOfferings() {
  const [chronSort, setChronSort] = useState(false);
  const weeklyOfferings: Offer[][] = [[], [], [], [], [], [], []];
  const locOfferings: { [key: string]: Offer[] } = {};
  offerings.forEach((location) => {
    for (let i = 0; i < location.schedule.length; i++) {
      const classSchedule = location.schedule[i];
      const classDetails = location.classes.find((item) => item.name === classSchedule.name)
      const offering = {
        ...location,
        ...classSchedule,
        ...classDetails
      }
      if (offering.day === "Sunday") {
        weeklyOfferings[0].push(offering)
      } else if (offering.day === "Monday") {
        weeklyOfferings[1].push(offering)
      } else if (offering.day === "Tuesday") {
        weeklyOfferings[2].push(offering)
      } else if (offering.day === "Wednesday") {
        weeklyOfferings[3].push(offering)
      } else if (offering.day === "Thursday") {
        weeklyOfferings[4].push(offering)
      } else if (offering.day === "Friday") {
        weeklyOfferings[5].push(offering)
      } else if (offering.day === "Saturday") {
        weeklyOfferings[6].push(offering)
      }
      if (offering.title in locOfferings) {
        locOfferings[offering.title].push(offering)
      } else {
        locOfferings[offering.title] = [offering];
      }
    }
  })
  return (
    <div
      className={`${globalStyle.screen} ${style.offerings}`}
      id="offerings">
      <div id={style.offeringsHeader}>
        <h2>
          Weekly Offerings
        </h2>
        <div>
          {`Sort By:   `}
          <ToggleButtonGroup
            exclusive
            onChange={(e, value: boolean) => {
              setChronSort(value)
            }}
          >
            <ToggleButton value={true}>
              Day
            </ToggleButton>
            <ToggleButton value={false}>
              Location
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

      </div>
      <div id={style.offerList}>
        {chronSort ?
          <>

            <div className={style.offerDay}>
              <h2>Sundays</h2>
              {weeklyOfferings[0].map((offer, i) => {
                return (<OfferingItem
                  key={i}
                  chronSort={chronSort}
                  offer={offer}
                />)
              })}
            </div>
            <div className={style.offerDay}>
              <h2>Mondays</h2>
              {weeklyOfferings[1].map((offer, i) => {
                return (<OfferingItem
                  key={i}
                  chronSort={chronSort}
                  offer={offer}
                />)
              })}
            </div>
            <div className={style.offerDay}>
              <h2>Tuesdays</h2>
              {weeklyOfferings[2].map((offer, i) => {
                return (<OfferingItem
                  key={i}
                  chronSort={chronSort}
                  offer={offer}
                />)
              })}
            </div>
            <div className={style.offerDay}>
              <h2>Wednesdays</h2>
              {weeklyOfferings[3].map((offer, i) => {
                return (<OfferingItem
                  key={i}
                  chronSort={chronSort}
                  offer={offer}
                />)
              })}
            </div>
            <div className={style.offerDay}>
              <h2>Thursdays</h2>
              {weeklyOfferings[4].map((offer, i) => {
                return (<OfferingItem
                  key={i}
                  chronSort={chronSort}
                  offer={offer}
                />)
              })}
            </div>
            <div className={style.offerDay}>
              <h2>Fridays</h2>
              {weeklyOfferings[5].map((offer, i) => {
                return (<OfferingItem
                  key={i}
                  chronSort={chronSort}
                  offer={offer}
                />)
              })}
            </div>
            <div className={style.offerDay}>
              <h2>Saturdays</h2>
              {weeklyOfferings[6].map((offer, i) => {
                return (<OfferingItem
                  key={i}
                  chronSort={chronSort}
                  offer={offer}
                />)
              })}
            </div>
          </> :
          <>
            {Object.keys(locOfferings).map((loc, i) => {
              return (
                <div className={style.offerLoc} key={i}>
                  <h2>
                    <a href={locOfferings[loc][0].url}>
                      {loc}
                    </a>
                  </h2>
                  <h3>
                    {locOfferings[loc][0].address}
                  </h3>
                  {locOfferings[loc].map((offer, i) => {
                    return(
                      <OfferingItem
                        key={i}
                        chronSort={chronSort}
                        offer={offer}
                      />
                    )
                  })}
                </div>
              )
            })}

          </>}
      </div>
    </div >)
}