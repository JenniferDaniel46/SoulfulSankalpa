import { useState } from 'react';
import globalStyle from '../../app/global.module.css';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import OfferingItem from '../offeringItem';
import { yogaPura, kulaYoga, healingSpace, esporta } from '../offeringObj';
import style from './offerings.module.css';


export default function MobileOfferings() {
  const [chronSort, setChronSort] = useState(false);
  const [dayJSX, setDayJSX] = useState(<div>
    <h2>Sundays</h2>
    <OfferingItem
      chronSort={chronSort}
      offer={{
        ...yogaPura,
        ...yogaPura.classes[2],
        ...yogaPura.schedule[2]
      }}
    />
  </div>);
  const [locJSX, setLocJSX] = useState(<div>
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
  </div>);
  const handleDayChange = (e: React.MouseEvent<HTMLElement>, value: string) => {
    if (value === "sunday") {
      setDayJSX(<div>
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
      setDayJSX(<div>
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
      setDayJSX(<div>
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
      setDayJSX(<div>
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
      setDayJSX(<div>
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
      setDayJSX(<div>
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
      setDayJSX(<div>
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
      setLocJSX(<div>
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
      setLocJSX(<div>
        <h2>Healing Space</h2>
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
        <div>
          <h2>Kula Yoga</h2>
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
        <div>
          <h2>Yoga Pura</h2>
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
    <div className={`${globalStyle.screen}`}>
      <div>
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
        <div>
          <ToggleButtonGroup exclusive onChange={handleDayChange}>
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
        <div>
          <ToggleButtonGroup exclusive onChange={handleLocChange}>
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