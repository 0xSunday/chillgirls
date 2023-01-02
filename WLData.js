const wl = [
  {
    address: "0x6b2ea597d125cffa6c7b671cc36d9a63052e5350",
  },
  {
    address: "0x4dD4B5D6F696C5367444C0cCe7680DaaE8984a34",
  },
  {
    address: "0x4dD4B5D6F696C5367444C0cCe7680DaaE8984a34",
  },

];

// export function getFilteredAddress(address) {
//   consolo.log(address);
//   return const filteredAddress = wl.filter((event) => {
//     // const eventDate = new Date(event.date);
//      event.address === address;
//   });
// }

export function getFilteredAddress(address) {
  // console.log(address);
  return wl.find((event) => event.address == address.trim());
}
