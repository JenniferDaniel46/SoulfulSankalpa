import { useState } from 'react';
import globalStyle from '../../app/global.module.css';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import OfferingItem from '../offeringItem';
import { yogaPura, kulaYoga, healingSpace, esporta } from '../offeringObj';
import style from './offerings.module.css';


export default function MobileOfferings() {
  const [chronSort, setChronSort] = useState(false);
  const defaultDayJSX = (
    <div>
      <h2>Sundays</h2>
      <OfferingItem
        chronSort={true}
        offer={{
          ...yogaPura,
          ...yogaPura.classes[2],
          ...yogaPura.schedule[2]
        }}
      />
    </div>
  )
  const defaultLocJSX = (
    <div>
      <h2>Esporta</h2>
      <OfferingItem
        chronSort={chronSort}
        offer={{
          ...esporta,
          ...esporta.classes[0],
          ...esporta.schedule[0]
        }}
      />
      <OfferingItem
        chronSort={chronSort}
        offer={{
          ...esporta,
          ...esporta.classes[0],
          ...esporta.schedule[1]
        }}
      />
    </div>
  )
  const [dayJSX, setDayJSX] = useState(defaultDayJSX);
  const [locJSX, setLocJSX] = useState(defaultLocJSX);
  const handleDayChange = (e: React.MouseEvent<HTMLElement>, value: string) => {
    if (value === "sunday") {
      setDayJSX(<div className={style.offerCol}>
        <h2>Sundays</h2>
        <OfferingItem
          chronSort={chronSort}
          offer={{
            ...yogaPura,
            ...yogaPura.classes[2],
            ...yogaPura.schedule[2]
          }}
        />
      </div>)
    } else if (value === "monday") {
      setDayJSX(<div className={style.offerCol}>
        <h2>Mondays</h2>
        <OfferingItem
          chronSort={chronSort}
          offer={{
            ...esporta,
            ...esporta.classes[0],
            ...esporta.schedule[0]
          }}
        />
      </div>)
    } else if (value === "tuesday") {
      setDayJSX(<div className={style.offerCol}>
        <h2>Tuesdays</h2>
        <OfferingItem
          chronSort={chronSort}
          offer={{
            ...healingSpace,
            ...healingSpace.classes[0],
            ...healingSpace.schedule[0]
          }}
        />
      </div>)
    } else if (value === "wednesday") {
      setDayJSX(<div className={style.offerCol}>
        <h2>Wednesdays</h2>
        <OfferingItem
          chronSort={chronSort}
          offer={{
            ...esporta,
            ...esporta.classes[0],
            ...esporta.schedule[1]
          }}
        />
        <OfferingItem
          chronSort={chronSort}
          offer={{
            ...kulaYoga,
            ...kulaYoga.classes[0],
            ...kulaYoga.schedule[0]
          }}
        />
      </div>)
    } else if (value === "thursday") {
      setDayJSX(<div className={style.offerCol}>
        <h2>Thursdays</h2>
        <OfferingItem
          chronSort={chronSort}
          offer={{
            ...healingSpace,
            ...healingSpace.classes[1],
            ...healingSpace.schedule[1]
          }}
        />
      </div>)
    } else if (value === "friday") {
      setDayJSX(<div className={style.offerCol}>
        <h2>Fridays</h2>
        <OfferingItem
          chronSort={chronSort}
          offer={{
            ...yogaPura,
            ...yogaPura.classes[0],
            ...yogaPura.schedule[0]
          }}
        />
      </div>)
    } else if (value === "saturday") {
      setDayJSX(<div className={style.offerCol}>
        <h2>Saturdays</h2>
        <OfferingItem
          chronSort={chronSort}
          offer={{
            ...yogaPura,
            ...yogaPura.classes[1],
            ...yogaPura.schedule[1]
          }}
        />
      </div>)
    }
  }
  const handleLocChange = (e: React.MouseEvent<HTMLElement>, value: string) => {
    if (value === "esporta") {
      setLocJSX(<div className={style.offerCol}>
        <h2>Esporta</h2>
        <OfferingItem
          chronSort={chronSort}
          offer={{
            ...esporta,
            ...esporta.classes[0],
            ...esporta.schedule[0]
          }}
        />
        <OfferingItem
          chronSort={chronSort}
          offer={{
            ...esporta,
            ...esporta.classes[0],
            ...esporta.schedule[1]
          }}
        />
      </div>)
    } else if (value === "healing") {
      setLocJSX(<div className={style.offerCol}>
        <h2><a href={healingSpace.url}>Healing Space</a></h2>
        <OfferingItem
          chronSort={chronSort}
          offer={{
            ...healingSpace,
            ...healingSpace.classes[0],
            ...healingSpace.schedule[0]
          }}
        />
        <OfferingItem
          chronSort={chronSort}
          offer={{
            ...healingSpace,
            ...healingSpace.classes[1],
            ...healingSpace.schedule[1]
          }}
        />
      </div>)
    } else if (value === "kula") {
      setLocJSX(
        <div className={style.offerCol}>
          <h2><a href={kulaYoga.url}>Kula Yoga</a></h2>
          <OfferingItem
            chronSort={chronSort}
            offer={{
              ...kulaYoga,
              ...kulaYoga.classes[0],
              ...kulaYoga.schedule[0]
            }}
          />
        </div>
      )

    } else if (value === "pura") {
      setLocJSX(
        <div className={style.offerCol}>
          <h2><a href={yogaPura.url}>Yoga Pura</a></h2>
          <OfferingItem
            chronSort={chronSort}
            offer={{
              ...yogaPura,
              ...yogaPura.classes[2],
              ...yogaPura.schedule[2]
            }}
          />
          <OfferingItem
            chronSort={chronSort}
            offer={{
              ...yogaPura,
              ...yogaPura.classes[0],
              ...yogaPura.schedule[0]
            }}
          />
          <OfferingItem
            chronSort={chronSort}
            offer={{
              ...yogaPura,
              ...yogaPura.classes[1],
              ...yogaPura.schedule[1]
            }}
          />
        </div>
      )
    }
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
            <ToggleButton value={"esporta"}>
              Esporta
            </ToggleButton>
            <ToggleButton value={"healing"}>
              Healing Space
            </ToggleButton>
            <ToggleButton value={"kula"}>
              Kula Yoga
            </ToggleButton>
            <ToggleButton value={"pura"}>
              Yoga Pura
            </ToggleButton>
          </ToggleButtonGroup>
          {locJSX}
        </div>
      }
    </div>
  )
}