import { useState } from 'react';
import globalStyle from '../../app/global.module.css';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import OfferingItem from '../offeringItem';
import { yogaPura, kulaYoga, healingSpace, esporta } from '../offeringObj';
import style from "./offerings.module.css";

export default function DeskOfferings() {
  const [chronSort, setChronSort] = useState(false);

  return (
    <div className={globalStyle.screen}>
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
      <div>
        {chronSort ?
          <div>
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
          </div> :
          <div>
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
            <div>
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
            </div>
            <div>
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
            </div>
          </div>}
      </div>
    </div >)
}