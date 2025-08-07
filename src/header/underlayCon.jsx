function Layer({ isUnderlay }) {
  if (!isUnderlay) return null;

  return <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>;
}

export default Layer;
