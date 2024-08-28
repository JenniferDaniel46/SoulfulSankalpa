import { useState } from 'react';
import globalStyle from '../../app/global.module.css';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import OfferingItem from '../offeringItem';
import { yogaPura, kulaYoga, healingSpace, esporta } from '../offeringObj';
import style from "./offerings.module.css";

export default function DeskOfferings() {
  const [chronSort, setChronSort] = useState(false);
  return (
    <div
    className={`${globalStyle.screen} ${style.offerings}` }
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
              <OfferingItem
                chronSort={chronSort}
                offer={{
                  ...yogaPura,
                  ...yogaPura.classes[2],
                  ...yogaPura.schedule[2]
                }}
              />
            </div>
            <div className={style.offerDay}>
              <h2>Mondays</h2>
              <OfferingItem
                chronSort={chronSort}
                offer={{
                  ...esporta,
                  ...esporta.classes[0],
                  ...esporta.schedule[0]
                }}
              />
            </div>
            <div className={style.offerDay}>
              <h2>Tuesdays</h2>
              <OfferingItem
                chronSort={chronSort}
                offer={{
                  ...healingSpace,
                  ...healingSpace.classes[0],
                  ...healingSpace.schedule[0]
                }}
              />
            </div>
            <div className={style.offerDay}>
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
            </div>
            <div className={style.offerDay}>
              <h2>Thursdays</h2>
              <OfferingItem
                chronSort={chronSort}
                offer={{
                  ...healingSpace,
                  ...healingSpace.classes[1],
                  ...healingSpace.schedule[1]
                }}
              />
            </div>
            <div className={style.offerDay}>
              <h2>Fridays</h2>
              <OfferingItem
                chronSort={chronSort}
                offer={{
                  ...yogaPura,
                  ...yogaPura.classes[0],
                  ...yogaPura.schedule[0]
                }}
              />
            </div>
            <div className={style.offerDay}>
              <h2>Saturdays</h2>
              <OfferingItem
                chronSort={chronSort}
                offer={{
                  ...yogaPura,
                  ...yogaPura.classes[1],
                  ...yogaPura.schedule[1]
                }}
              />
            </div>
          </> :
          <>
            <div className={style.offerLoc}>
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
            <div className={style.offerLoc}>
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
            </div>
            <div className={style.offerLoc}>
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
            <div className={style.offerLoc}>
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
          </>}
      </div>
    </div >)
}