// @ts-check

const ONLNE = "ONLNE";

const locationOptions = [
  { id: 0, value: "DTPHX", text: "Downtown Phoenix campus" },
  { id: 1, value: "POLY", text: "Polytechnic campus" },
  { id: 2, value: "TEMPE", text: "Tempe campus" },
  { id: 3, value: "WEST", text: "West campus" },
  { id: 4, value: "ONLNE", text: "ASU Online" },
];

const onlneOption = locationOptions[4];

const asuLocalOptions = [
  { id: 0, value: "COCHS", text: "Cochise" },
  { id: 1, value: "LOSAN", text: "Los Angeles" },
  { id: 2, value: "NEAZ", text: "Northeastern Arizona" },
  { id: 3, value: "PIMA", text: "Pima" },
  { id: 4, value: "CAC", text: "Pinal" },
  { id: 5, value: "EAC", text: "TheGilaValley" },
  { id: 6, value: "TUCSN", text: "Tucson" },
  { id: 7, value: "YAVAP", text: "Yavapai" },
  { id: 8, value: "AWC", text: "Yuma" },
  { id: 9, value: "MESACITYCR", text: "Mesa City Center" },
  { id: 10, value: "CALHC", text: "Colleges at Lake Havasu City" },
];

const acceleratedConcurrentOptions = [
  {
    id: 0,
    value: "all",
    text: "All",
  },
  {
    id: 1,
    value: "accelerateDegrees",
    text: "Accelerated",
  },
  {
    id: 2,
    value: "concurrentDegrees",
    text: "Concurrent",
  },
];

const defaultAccelConcOption = acceleratedConcurrentOptions[0];

const acceleratedConcurrentValues = [
  "acceleratedConcurrent",
  "concurrentDegrees",
  "all",
];

const isAccelConcValid = opt => opt?.value && opt?.value !== "all";

export {
  asuLocalOptions,
  acceleratedConcurrentOptions,
  acceleratedConcurrentValues,
  defaultAccelConcOption,
  isAccelConcValid,
  locationOptions,
  ONLNE,
  onlneOption,
};
