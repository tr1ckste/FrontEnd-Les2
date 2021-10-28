'use strict'

const container = document.querySelector('.problem');

const createDir = () => {
  const dir = document.createElement('div');
  dir.className = 'directory flex';
  return dir;
}

const createFolder = name => {
  const folder = document.createElement('div');
  folder.className = 'folder flex';
  const innerFolder = document.createElement('div');
  innerFolder.className = 'inner-folder flex';
  folder.appendChild(innerFolder);
  const arrowImg = document.createElement('img');
  arrowImg.src = './images/arrow.png';
  arrowImg.className = 'arrow';
  innerFolder.appendChild(arrowImg);
  const folderImg = document.createElement('img');
  folderImg.src = './images/folder.png';
  innerFolder.appendChild(folderImg);
  const folderName = document.createElement('p');
  folderName.innerHTML = name;
  innerFolder.appendChild(folderName);
  return folder;
}

const createFile = name => {
  const file = document.createElement('div');
  file.className = 'folder flex';
  const innerFolder = document.createElement('div');
  innerFolder.className = 'inner-folder flex';
  file.appendChild(innerFolder);
  const fileImg = document.createElement('img');
  fileImg.src = './images/file.png';
  innerFolder.appendChild(fileImg);
  const folderName = document.createElement('p');
  folderName.innerHTML = name;
  innerFolder.appendChild(folderName);
  return file;
}

const showStructure = (directory, container) => {
  const currDirectory = createDir();
  container.appendChild(currDirectory);
  if (!directory) return;
  for (const object of directory) {
    if (object.folder) {
      const folder = createFolder(object.title);
      currDirectory.appendChild(folder);
      showStructure(object.children, folder);
    } else {
      console.log(object);
      const file = createFile(object.title);
      currDirectory.appendChild(file);
    }
  }
}

showStructure(structure, container);

document.querySelectorAll('.inner-folder').forEach(innerFolder => {
  innerFolder.addEventListener('click', () => {
    const innerDirectory = innerFolder.parentNode.querySelector('.directory');
    if (!innerDirectory) return;
    if (innerDirectory.style.display === 'none') {
      innerDirectory.style.display = 'block';
      innerFolder.querySelector('.arrow').style.transform = 'rotate(90deg)';
      return;
    }
    innerDirectory.style.display = 'none';
    innerFolder.querySelector('.arrow').style.transform = 'rotate(0deg)';
  });
});
