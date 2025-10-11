// src/pages/assessment/HardNumbersConnecting.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAssessment } from "../../context/AssessmentContext";

const HardNumbersConnecting = ({ count = 7 }) => {
  const containerRef = useRef(null);
  const [points, setPoints] = useState([]);
  const [selectedSeq, setSelectedSeq] = useState([]);
  const [target, setTarget] = useState(1);
  const [wrongPulse, setWrongPulse] = useState(null);
  const { updateScore } = useAssessment();
  const navigate = useNavigate();

  useEffect(() => {
    const generate = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const W = rect.width, H = rect.height;
      const nodeSize = 64, minDist = 90;
      const items = [];
      for (let num = 1; num <= count; num++) {
        let placed = false, tries = 0;
        while (!placed && tries < 250) {
          const x = Math.random() * (W-nodeSize) + nodeSize/2;
          const y = Math.random() * (H-nodeSize) + nodeSize/2;
          if(items.every(it => Math.hypot(it.x-x,it.y-y)>=minDist)) {
            items.push({num,x,y}); placed=true;
          }
          tries++;
        }
        if(!placed) items.push({num, x: (num/(count+1))*W, y:(num%2===0?0.3:0.7)*H});
      }
      setPoints(items.sort(()=>Math.random()-0.5));
    };
    generate();
    window.addEventListener("resize", generate);
    return () => window.removeEventListener("resize", generate);
  }, [count]);

  const getCoords = (num) => points.find(pt=>pt.num===num) || {x:0,y:0};
  const colorForIndex = idx => `hsl(${(210-idx*26+360)%360} 80% 56%)`;

  const handleClick = (num) => {
    if(num!==target){ setWrongPulse(num); setTimeout(()=>setWrongPulse(null),400); return; }
    setSelectedSeq(prev=>{
      const newSeq=[...prev,num];
      setTarget(target+1);
      if(newSeq.length===count){ updateScore("numbers",100); setTimeout(()=>navigate("/assessment/object-naming"),500); }
      return newSeq;
    });
  };

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-4 text-center">Numbers Connecting Test</h2>
      <div className="flex items-center justify-between mb-4 px-4">
        <div className="text-sm text-gray-700">Connect: 1 → {count}</div>
        <div className="text-sm">Progress: {selectedSeq.length}/{count}</div>
        <div className="text-sm">
          Next: <span className="inline-block px-2 py-1 rounded-full text-white font-semibold"
                      style={{background:colorForIndex(selectedSeq.length),minWidth:30,textAlign:"center"}}>
            {target<=count?target:"—"}
          </span>
        </div>
      </div>

      <div ref={containerRef} className="relative bg-white border rounded-lg shadow-sm" style={{height:420,overflow:"hidden"}}>
        <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%">
          {selectedSeq.map((num,idx)=>{
            if(idx===0) return null;
            const prev=getCoords(selectedSeq[idx-1]), cur=getCoords(num);
            return <line key={idx} x1={prev.x} y1={prev.y} x2={cur.x} y2={cur.y} stroke={colorForIndex(idx-1)} strokeWidth={6} strokeLinecap="round" style={{filter:"drop-shadow(0 2px 2px rgba(0,0,0,0.12))"}} />
          })}
        </svg>

        {points.map(pt=>{
          const isSelected=selectedSeq.includes(pt.num);
          const idx=selectedSeq.indexOf(pt.num);
          const isNext=pt.num===target;
          const bg=isSelected?colorForIndex(idx):isNext?"#fff":"#f1f5f9";
          const border=isNext?`3px solid ${colorForIndex(selectedSeq.length)}`:"2px solid rgba(0,0,0,0.08)";
          return <button key={pt.num} onClick={()=>handleClick(pt.num)} className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-bold shadow-md" style={{left:pt.x,top:pt.y,width:64,height:64,borderRadius:"999px",background:bg,border,color:isSelected?"white":"#0f172a",fontSize:20,cursor:isSelected?"default":"pointer",pointerEvents:isSelected?"none":"auto"}}>
            {pt.num}
            {wrongPulse===pt.num && <span style={{position:"absolute",inset:0,borderRadius:"999px",boxShadow:"0 0 0 4px rgba(255,0,0,0.15)",animation:"wrongPulse 380ms ease-out"}} />}
          </button>
        })}

        {points.length===0 && <div className="absolute inset-0 flex items-center justify-center text-gray-500">Preparing board...</div>}
      </div>

      <div className="mt-4 text-center">
        <button onClick={() => {setSelectedSeq([]); setTarget(1); setPoints([]); setTimeout(()=>window.dispatchEvent(new Event("resize")),60);}} className="px-4 py-2 bg-gray-200 rounded mr-3">Restart</button>
        <button onClick={() => {updateScore("numbers",Math.round((selectedSeq.length/count)*100)); navigate("/assessment/object-naming");}} className="px-4 py-2 bg-red-500 text-white rounded">Give Up</button>
      </div>

      <style>{`@keyframes wrongPulse{0%{box-shadow:0 0 0 0 rgba(255,0,0,0.22);}100%{box-shadow:0 0 0 16px rgba(255,0,0,0);}}`}</style>
    </div>
  );
};

export default HardNumbersConnecting;



