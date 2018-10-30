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
  pad.keylabel.classList.add('padtext');
  pad.appendChild(pad.keylabel);
  pad.controls=document.createElement('div');
  pad.controls.classList.add('controlpad');
  pad.appendChild(pad.controls);
  pad.filelabel=document.createElement('label');
  pad.filelabel.innerHTML='🖪';
  pad.filelabel.title='Select audio file';
  pad.file=document.createElement('input');
  pad.file.type='file';
  pad.file.addEventListener('change',selectfile);
  pad.filelabel.appendChild(pad.file);
  pad.controls.appendChild(pad.filelabel);
  pad.bpm=document.createElement('a');
  pad.bpm.innerHTML='🕑';
  pad.bpm.title='Adjust speed';
  pad.bpm.addEventListener('click',openspeed);
  pad.controls.appendChild(pad.bpm);
  pad.groups=document.createElement('a');
  pad.volume=document.createElement('a');
  pad.volume.innerHTML='🔊';
  pad.volume.title='Adjust volume';
  pad.volume.addEventListener('click',openvolume);
  pad.controls.appendChild(pad.volume);
  pad.groups.innerHTML='♣';
  pad.groups.title='Set control group';
  pad.groups.addEventListener('click',opengroups);
  pad.controls.appendChild(pad.groups);
  pad.filename=document.createElement('div');
  pad.filename.classList.add('padtext');
  pad.appendChild(pad.filename);
  pad.addEventListener('click',activate);
  parent.appendChild(pad);
  let paddata=PadData.deserialize(key);
  if(paddata) {
    selectfile(false,paddata);
    pad.classList.add('group'+paddata.group);
  }
}

function build(){
  let launchpad=document.querySelector('#launchpad');
  for(let row of KEYS){
    let div=document.createElement('div');
    for(let key of row) makepad(key,div);
    launchpad.appendChild(div);
  }
}
