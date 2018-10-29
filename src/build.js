const GROUP=false; //TODO allow 16 groups by color
const KEYS=[
  '1234567890',
  'qwertyuiop',
  'asdfghjklç',
  'zxcvbnm',
]

function makepad(key,parent){
  let pad=document.createElement('div');
  pads.set(key,pad);
  pad.id='pad'+key;
  pad.className='pad';
  pad.key=key;
  pad.keylabel=document.createElement('div');
  pad.keylabel.innerHTML=key.toUpperCase();
  pad.appendChild(pad.keylabel);
  pad.controls=document.createElement('div');
  pad.controls.classList.add('controlpad');
  pad.appendChild(pad.controls);
  pad.filelabel=document.createElement('label');
  pad.filelabel.innerHTML='🔊';
  pad.filelabel.title='Select audio file';
  pad.controls.appendChild(pad.filelabel);
  pad.volume=document.createElement('a');
  pad.volume.innerHTML='☊';
  pad.volume.title='Adjust volume';
  pad.volume.addEventListener('click',openvolume);
  pad.controls.appendChild(pad.volume);
  pad.bpm=document.createElement('a');
  pad.bpm.innerHTML='⚡';
  pad.bpm.title='Adjust speed';
  pad.bpm.addEventListener('click',openspeed);
  pad.controls.appendChild(pad.bpm);
  pad.file=document.createElement('input');
  pad.file.type='file';
  pad.file.addEventListener('change',selectfile);
  pad.filelabel.appendChild(pad.file);
  if(GROUP){
    pad.group=document.createElement('label');
    pad.group.innerHTML='♬';
    pad.group.title='Select group';
    pad.controls.appendChild(pad.group);
  }
  pad.filename=document.createElement('div');
  pad.appendChild(pad.filename);
  pad.addEventListener('click',activate);
  parent.appendChild(pad);
  let paddata=PadData.deserialize(key);
  if(paddata) selectfile(false,paddata);
}

function build(){
  let launchpad=document.querySelector('#launchpad');
  for(let row of KEYS){
    let div=document.createElement('div');
    for(let key of row) makepad(key,div);
    launchpad.appendChild(div);
  }
}
