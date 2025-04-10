import './Classes.css';
export default function Classes() {
  const color = 'blue';
  const dangerous = true;
  return (
    <div>
      <h2>Classes</h2>
      <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
        Dynamic Blue background  </div>
      <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-blue'} wd-fg-black wd-padding-10px`}>
        Dangerous background    </div>
      <div className={`${!dangerous ? 'wd-bg-red' : 'wd-bg-blue'} wd-fg-black wd-padding-10px`}>
        Dynamic Blue background     </div><hr/>
    </div>
  )
};
