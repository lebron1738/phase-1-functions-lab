function distanceTravelledInFeet(distance1, distance2) {
  if (distance1 > distance2) {
    return (distance1 - distance2) * 264;
  } else if (distance1 < distance2) {
    return (distance2 - distance1) * 264;
  }
}
console.log(distanceTravelledInFeet(35, 32));

function calculatesFarePrice(distance) {
  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return $25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}
