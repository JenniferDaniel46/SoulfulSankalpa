import { useState } from 'react';
import globalStyle from '../../app/global.module.css';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import OfferingItem from '../offeringItem';
import { yogaPura, kulaYoga, healingSpace, esporta } from '../offeringObj';
import style from './offerings.module.css';
import { offerings } from '../offeringObj';
import { Offer } from '../offeringObj';
import { title } from 'process';


export default function MobileOfferings() {
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
  const defaultDayJSX = (
    <div>
      <h2>Sundays</h2>
      {weeklyOfferings[0].map((offer, i) => {
        return (<OfferingItem
          key={i}
          chronSort={true}
          offer={offer}
        />)
      })}
    </div>
  )
  const defaultLocJSX = (
    <div>
      <h2>{locOfferings[Object.keys(locOfferings)[0]][0].title}</h2>
      <h3>{locOfferings[Object.keys(locOfferings)[0]][0].address}</h3>
      {locOfferings[Object.keys(locOfferings)[0]].map((offer, i) => {
        return (
          <OfferingItem
            key={i}
            chronSort={chronSort}
            offer={offer}
          />
        )
      })}
    </div>
  )
  const [dayJSX, setDayJSX] = useState(defaultDayJSX);
  const [locJSX, setLocJSX] = useState(defaultLocJSX);
  const handleDayChange = (e: React.MouseEvent<HTMLElement>, value: string) => {
    if (value === "sunday") {
      setDayJSX(<div className={style.offerCol}>
        <h2>Sundays</h2>
        {weeklyOfferings[0].map((offer, i) => {
          return (<OfferingItem
            key={i}
            chronSort={chronSort}
            offer={offer}
          />)
        })}
      </div>)
    } else if (value === "monday") {
      setDayJSX(<div className={style.offerCol}>
        <h2>Mondays</h2>
        {weeklyOfferings[1].map((offer, i) => {
          return (<OfferingItem
            key={i}
            chronSort={chronSort}
            offer={offer}
          />)
        })}
      </div>)
    } else if (value === "tuesday") {
      setDayJSX(<div className={style.offerCol}>
        <h2>Tuesdays</h2>
        {weeklyOfferings[2].map((offer, i) => {
          return (<OfferingItem
            key={i}
            chronSort={chronSort}
            offer={offer}
          />)
        })}
      </div>)
    } else if (value === "wednesday") {
      setDayJSX(<div className={style.offerCol}>
        <h2>Wednesdays</h2>
        {weeklyOfferings[3].map((offer, i) => {
          return (<OfferingItem
            key={i}
            chronSort={chronSort}
            offer={offer}
          />)
        })}
      </div>)
    } else if (value === "thursday") {
      setDayJSX(<div className={style.offerCol}>
        <h2>Thursdays</h2>
        {weeklyOfferings[4].map((offer, i) => {
          return (<OfferingItem
            key={i}
            chronSort={chronSort}
            offer={offer}
          />)
        })}
      </div>)
    } else if (value === "friday") {
      setDayJSX(<div className={style.offerCol}>
        <h2>Fridays</h2>
        {weeklyOfferings[5].map((offer, i) => {
          return (<OfferingItem
            key={i}
            chronSort={chronSort}
            offer={offer}
          />)
        })}
      </div>)
    } else if (value === "saturday") {
      setDayJSX(<div className={style.offerCol}>
        <h2>Saturdays</h2>
        {weeklyOfferings[6].map((offer, i) => {
          return (<OfferingItem
            key={i}
            chronSort={chronSort}
            offer={offer}
          />)
        })}
      </div>)
    }
  }
  const handleLocChange = (e: React.MouseEvent<HTMLElement>, value: string) => {
    setLocJSX(
      <div className={style.offerCol}>
        <h2>{locOfferings[value][0].title}</h2>
        <h3>{locOfferings[value][0].address}</h3>
        {locOfferings[value].map((offer, i) => {
          return (
            <OfferingItem
              key={i}
              chronSort={chronSort}
              offer={offer}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className={`${globalStyle.screen} ${style.offerings}`} id="offerings">
      <div id={style.offeringsHeader}>
        <h2>
          Weekly Offerings
        </h2>
        <div>
          Sort By:
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
      {chronSort ?
        <div className={style.sortMenu}>
          <ToggleButtonGroup exclusive className={style.buttonGroup} onChange={handleDayChange}>
            <ToggleButton value={"sunday"}>
              Sun
            </ToggleButton>
            <ToggleButton value={"monday"}>
              Mon
            </ToggleButton>
            <ToggleButton value={"tuesday"}>
              Tues
            </ToggleButton>
            <ToggleButton value={"wednesday"}>
              Wed
            </ToggleButton>
            <ToggleButton value={"thursday"}>
              Thurs
            </ToggleButton>
            <ToggleButton value={"friday"}>
              Fri
            </ToggleButton>
            <ToggleButton value={"saturday"}>
              Sat
            </ToggleButton>
          </ToggleButtonGroup>
          {dayJSX}
        </div> :
        <div className={style.sortMenu}>
          <ToggleButtonGroup className={style.buttonGroup} exclusive onChange={handleLocChange}>
            {Object.keys(locOfferings).map((loc, i) => {
              return (
                <ToggleButton key={i} value={loc}>
                  {loc}
                </ToggleButton>
              )
            })}
          </ToggleButtonGroup>
          {locJSX}
        </div>
      }
    </div>
  )
}