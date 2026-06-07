export default function PageLoader({ visible }) {
  return (
    <div className={visible ? 'page-loader visible' : 'page-loader'} aria-hidden={!visible}>
      <div className="loader-card">
        <div className="loader-mark">HA</div>
        <div>
          <strong>HA Developers</strong>
          <span>Loading digital experience</span>
        </div>
        <div className="loader-bar"><span /></div>
      </div>
    </div>
  );
}
