import{j as e,u as N,r as i,a as C,g as F,b as T,d as U,c as k,R as j,e as L}from"./index-Bzs5Dcgp.js";import{F as z,i as M}from"./isObjectInArray-uVgRyVi8.js";import{u as S}from"./useTranslation-Bazeop85.js";import{T as V}from"./Title-FLtDsIrM.js";const K=({value:n,onChange:r,label:l})=>{const s=({target:o})=>{let t=o.value.trim();t=t.replace(/^(0+)\B/,""),t||(t="0"),!isNaN(Number(t))&&r(t)};return e.jsxs("div",{className:`flex border-[1px]  bg-white py-2 px-3\r
		  rounded-lg outline-none caret-black  w-full\r
	   hover:border-blue-400 focus:border-blue-400 md:w-[200px]`,children:[e.jsx("p",{className:"text-gray-400",children:l}),e.jsx("input",{className:"px-2 w-full mx-1 outline-none caret-blue-500",onChange:s,value:n,type:"text"})]})},w=({options:n=[],placeholder:r,onChange:l,value:s})=>{console.log("#### value",s);const o=N(),[t,c]=i.useState(C(F())),[m,f]=i.useState(s),[x,d]=i.useState(!1),h=i.useRef(null),{t:B}=S();i.useEffect(()=>{f(s)},[s]),i.useEffect(()=>(document.addEventListener("click",b),()=>{document.removeEventListener("click",b)}),[]);const A=i.useMemo(()=>[...n].sort((a,v)=>{const u=t.some(g=>g.name===a.name),p=t.some(g=>g.name===v.name);return u===p?0:u?-1:1}).filter(a=>a.name.toLowerCase().includes(m.toLowerCase())),[n,t,m]),y=({target:a})=>{f(a.value),a.value.length===0&&l({name:"USD",value:1})},E=a=>{const v=n.filter(u=>u.name===a)[0];l(v),f(v.name),d(!1)},R=(a,v)=>{if(v)o(T(a)),c(u=>[a,...u]);else{o(U(a));const u=t.filter(p=>p.name!==a.name);c(u)}},b=a=>{h.current&&!h.current.contains(a.target)&&d(!1)};return e.jsxs("div",{ref:h,className:"w-full rounded-sm flex items-center flex-col text-base font-normal relative sd:w-[200px]",children:[e.jsx("input",{className:`\r
          w-[260px] border-[1px] bg-white py-2 px-3\r
          rounded-lg outline-none caret-black shadow-sm\r
        hover:border-blue-400 focus:border-blue-400 sd:w-[200px]`,onChange:y,placeholder:r,value:m,onClick:()=>d(!0)}),x&&e.jsx("div",{className:"absolute top-full my-2 bg-white border w-full rounded-md py-2 text-base font-normal max-h-[200px] overflow-y-auto ",children:A.length!==0?A.map(a=>e.jsxs("div",{className:"flex justify-between text-base cursor-pointer font-normal text-black hover:bg-zinc-100 items-center",children:[e.jsx("div",{className:"px-2 py-1 w-full",onClick:()=>E(a.name),children:a.name}),e.jsx("div",{className:"mr-2",children:e.jsx(z,{item:a,onFavourite:R,favouriteState:M(a,t)})})]},a.name)):e.jsx("div",{className:"px-4 py-1 text-base cursor-pointer font-normal text-black",children:B("nothing")})})]})},X=({amount:n,convertibleCurrency:r,conversionIntoCurrency:l})=>{const s=i.useCallback(o=>{const t=o.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t[1]&&(t[1]=t[1].substring(0,5)),t.join(".")},[n,l.value,r.value]);return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"text-gray-500 font-semibold text-2xl",children:[s(n)," ",r.name," ="]}),e.jsxs("div",{className:"text-gray-600 font-bold text-3xl my-2.5",children:[s(n/r.value*l.value)," ",l.name]}),e.jsxs("div",{className:"text-gray-500 font-normal text-sm",children:["1 ",r.name," = ",(1/r.value*l.value).toFixed(7)," ",l.name]}),e.jsxs("div",{className:"text-gray-500 font-normal text-sm",children:["1 ",l.name," = ",(1/l.value*r.value).toFixed(7)," ",r.name]})]})},H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACcUlEQVR4nO2dTW4UMRCFfQKCuAq/tyKERa6QK2TNZtqzgExCzgAjwYUi8ZCnEQlikOhJj1+5/X1S7SJ19XvdHttd5aQEAAAAALBQVnqTss52sdZrdzr9kHWSsm5Slv6IQdfpg56401s2H/U0ZW3/Ev8+Nu4UexZ/jJVeulPtV/wxTt3p9iy+MMArvtJaL2bNoVsOET/ryp12z+KXvz9xp94+RcRBXyaK/y1lPXOn3j6I35j4g77z5M8B4htBfCOI39hUc9BdyrpIg84bj3e77XTzlvLUef4S47Nn7VL27v03ryBxU1f88vXKf9MKFq/qGZD1PsANK1icYUA2GlB+lKvBECTvEFTgR1gPnv7rVB2mofotvm0L/bCF2I+UdblbjLUdpzGKB9iKCAAmBAATAoAJAcCEAGBCAChLadaEjTvtZXGICasIC5wlQXFuAChPb8iENdXRPhMGfTri1eHBVvZmr/g06VWkzHbKtm7W25T1vOalAQBaYUVHv4cyIfhXRz+tVBXYJ/59bHdTarDWPmHC0RhPcfmfzUNMMBuACUehlBpO+47BmzA7+7ZLMCF8+SVvwqzQeB4ATAgzHH2dOBxx/sWsYEIAMCEATZtQtnZLQ5u/0/38UTF2+9+1M0UtFx50OzFhLTBMp4Ihvnzll+MXJfeTp2BBZ33yGkBnferGAIYgeYegwniujvupU5C4ivM/A/qLrbeiorx6ZSHm73S/eGRc/ur6nyY+lRS9b0W0TkZ8H4hvBPGNIL4RxDdCWYqZ6QtH5vnGkyERf1YozjVDeXoT1dEMO8bqaMSv1KS3v6OfJr2K0NEPAAAAAKkLfgJhPgx0m0y+kgAAAABJRU5ErkJggg==",O=({onReverse:n})=>{const r=()=>{n()};return e.jsx("button",{onClick:r,className:"clear rounded-full w-[49px] grow border mx-2 p-3 hover:border-blue-400 active:border-blue-200 active:bg-gray-100",children:e.jsx("img",{className:"w-[25px]",src:H,alt:"reverse"})})},Z=()=>{var c,m,f;const n=C(k()),[r,l]=j.useState(!1),[s,o]=j.useState({from:{name:"USD",value:1},to:{name:"USD",value:1},amount:1}),t=()=>{o({...s,from:s.to,to:s.from}),l(!r)};return e.jsxs("div",{className:"flex gap-3 flex-col justify-center md:w-full",children:[e.jsxs("div",{className:"flex gap-3 flex-col md:flex-row",children:[e.jsx(K,{label:((c=s.from)==null?void 0:c.name)||"",value:s.amount,onChange:x=>o(d=>({...d,amount:x}))}),e.jsxs("div",{className:"flex items-center gap-2 flex-col sd:flex-row",children:[e.jsx(w,{options:n,value:(m=s.from)==null?void 0:m.name,placeholder:"From",onChange:x=>o(d=>({...d,from:x}))}),e.jsx(O,{onReverse:t}),e.jsx(w,{options:n,value:(f=s.to)==null?void 0:f.name,placeholder:"To",onChange:x=>o(d=>({...d,to:x}))})]})]}),e.jsx(X,{amount:+s.amount,conversionIntoCurrency:s.to,convertibleCurrency:s.from})]})},Y=()=>{const[n,r]=i.useState([1]),{t:l}=S(),s=N(),o=()=>{s(L({from:{name:"USD",value:1},to:{name:"USD",value:1},date:new Date().toLocaleString()}))},t=()=>{r(c=>[...c,c.length+1]),o()};return i.useEffect(()=>{o()},[]),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(V,{tag:"h1",children:l("conversion")}),n.map(c=>e.jsx("div",{className:"flex gap-5  justify-center items-center ml:justify-between",children:e.jsx(Z,{},c)},c)),e.jsx("button",{onClick:()=>r(c=>c.filter(m=>m!==c.length-1)),className:"h-full border py-1 rounded-md px-5 text-[20px] bg-slate-50 text-red-700 hover:bg-red-100 hover:text-gray-700 duration-200 hover:border-red-100",children:"-"}),e.jsx("button",{onClick:t,className:"flex items-center justify-center border rounded-md w-full text-[20px] bg-slate-50 text-green-700 hover:bg-green-100 hover:text-gray-700 duration-200 hover:border-green-100",children:"+"})]})};export{Y as Home};
