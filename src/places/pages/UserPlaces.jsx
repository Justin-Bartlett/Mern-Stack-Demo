import { useParams } from "react-router-dom"

import PlaceList from "../components/PlaceList"

const UserPlaces = (props) => {
  const userId = useParams().userId

  const DUMMMY_PLACES = [
    {
      id: "p1",
      title: "Empire State Building",
      description: "One of the most famous skyscrapers in the world",
      imageUrl:
        "https://imgs.search.brave.com/IGbftqtw4X9GgxGFjB80wR2HDFUayfG5rRKH6R1u8Bk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/MjgzNjY4OTA0NjIt/ZGQ0YmFlY2Y0OTJi/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZhdXRv/PWZvcm1hdCZmaXQ9/Y3JvcCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1ueDhaVzF3YVhK/bEpUSXdjM1JoZEdV/bE1qQmlkV2xzWkds/dVozeGxibnd3Zkh3/d2ZIeDhNQT09",
      address: "20 W 34th St, New Yok, NY 10001",
      location: {
        lat: 40.7484405,
        lng: -73.9878584,
      },
      creator: "u1",
    },
    {
      id: "p2",
      title: "Empire State Building",
      description: "One of the most famous skyscrapers in the world",
      imageUrl:
        "https://imgs.search.brave.com/IGbftqtw4X9GgxGFjB80wR2HDFUayfG5rRKH6R1u8Bk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/MjgzNjY4OTA0NjIt/ZGQ0YmFlY2Y0OTJi/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZhdXRv/PWZvcm1hdCZmaXQ9/Y3JvcCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1ueDhaVzF3YVhK/bEpUSXdjM1JoZEdV/bE1qQmlkV2xzWkds/dVozeGxibnd3Zkh3/d2ZIeDhNQT09",
      address: "20 W 34th St, New Yok, NY 10001",
      location: {
        lat: 40.7484405,
        lng: -73.9878584,
      },
      creator: "u2",
    },
  ]

  const loadedPlaces = DUMMMY_PLACES.filter((place) => place.creator === userId)

  return <PlaceList items={loadedPlaces} />
}

export default UserPlaces
