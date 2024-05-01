import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import yayJpg from '../assets/yay.jpg';
const { getEspresso, getApp, initEspresso } = require('@espresso/cores');

export default function HomePage() {
  const ret = getEspresso();
  const [initValue, setInitValue] = useState(ret)
  useEffect(() => {
    console.log('espresso: ', ret)
    initEspresso();
    mountApp('espressoRoot');
  }, []);

  const mountApp = (id: string) => {
    if (!id) {
        return;
    }
    const rootEle = document.getElementById(id);
    if (!rootEle) {
        return;
    }
    const AppContainer = getApp();
    const root = createRoot(rootEle);
    root.render(<AppContainer />);
  }
  return (
    <div>
      {/* <div>welcom espresso hub</div> */}
      {/* <div>{initValue}</div> */}
      <div id='espressoRoot'></div>
    </div>
  );
}
