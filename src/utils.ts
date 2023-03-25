// gets an array of dogs after 1 second delay
export function getDogs() {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: "Luna",
            breed: "Caucasian Shepherd",
          },
          {
            id: 2,
            name: "Ralph",
            breed: "Husky",
          },
        ]);
      }, 1000);
    });
}