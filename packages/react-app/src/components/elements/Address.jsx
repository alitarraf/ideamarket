const Address = ({ address, shortened }) => {
  let displayAddress = "";

  if (shortened && address) {
    if (
      address.includes(".eth") ||
      address === "" ||
      address === "Not connected"
    ) {
      displayAddress = address;
    } else {
      displayAddress = `${address.substring(0, 4)}...${address.substring(
        address.length - 4
      )}`.toLowerCase();
    }
  }

  return (
    <div>
      <div className="text-neutral-400">{displayAddress}</div>
    </div>
  );
};

export default Address;
