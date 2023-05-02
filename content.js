function addEye64(rotation) {
  return `
  <svg class="googly-draggable" transform="rotate(${rotation})" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64">
    <defs>
        <circle id="a64" cx="32" cy="32" r="29.867"/>
        <circle id="c64" cx="16" cy="16" r="16"/>
    </defs>
    <g fill="none" fill-rule="evenodd">
        <circle cx="32" cy="32" r="32" fill="#D8D8D8"/>
        <mask id="b64" fill="#fff">
            <use xlink:href="#a64"/>
        </mask>
        <use xlink:href="#a64" fill="#ECECEC"/>
        <circle cx="32.533" cy="5.867" r="29.333" fill="#FFF" fill-opacity=".4" mask="url(#b64)"/>
        <path fill="#FFF" fill-opacity=".649" d="M4.576 31.52c-.013.345-.02.692-.02 1.04 0 15.238 12.352 27.59 27.589 27.59 15.237 0 27.588-12.352 27.588-27.59 0-.348-.006-.695-.019-1.04-.547 14.754-12.681 26.547-27.57 26.547-14.887 0-27.021-11.793-27.568-26.547Z" mask="url(#b64)"/>
        <g mask="url(#b64)">
            <g transform="translate(16 27.733)">
                <mask id="d" fill="#fff">
                    <use xlink:href="#c64"/>
                </mask>
                <use xlink:href="#c64" fill="#000"/>
                <circle cx="16.533" cy=".533" r="20.8" fill="#FFF" fill-opacity=".2" mask="url(#d)"/>
            </g>
        </g>
    </g>
  </svg>`
}

function addEye48(rotation) {
  return `
  <svg class="googly-draggable" transform="rotate(${rotation})" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48">
    <defs>
        <circle id="a48" cx="24" cy="24" r="22.4"/>
        <circle id="c48" cx="12" cy="12" r="12"/>
    </defs>
    <g fill="none" fill-rule="evenodd">
        <circle cx="24" cy="24" r="24" fill="#D8D8D8"/>
        <mask id="b48" fill="#fff">
            <use xlink:href="#a48"/>
        </mask>
        <use xlink:href="#a48" fill="#ECECEC"/>
        <circle cx="24.4" cy="4.4" r="22" fill="#FFF" fill-opacity=".4" mask="url(#b48)"/>
        <path fill="#FFF" fill-opacity=".649" d="M3.432 23.64c-.01.259-.015.52-.015.78 0 11.428 9.264 20.692 20.692 20.692 11.427 0 20.691-9.264 20.691-20.691 0-.262-.005-.522-.014-.781-.411 11.066-9.511 19.91-20.677 19.91S3.842 34.706 3.432 23.64Z" mask="url(#b48)"/>
        <g mask="url(#b48)">
            <g transform="translate(12 20.8)">
                <mask id="d" fill="#fff">
                    <use xlink:href="#c48"/>
                </mask>
                <use xlink:href="#c48" fill="#000"/>
                <circle cx="12.4" cy=".4" r="15.6" fill="#FFF" fill-opacity=".2" mask="url(#d)"/>
            </g>
        </g>
    </g>
</svg>
`
}

function addEye32(rotation) {
  return `
  <svg class="googly-draggable" transform="rotate(${rotation})" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">
    <defs>
        <circle id="a32" cx="16" cy="16" r="14.933"/>
        <circle id="c32" cx="8" cy="8" r="8"/>
    </defs>
    <g fill="none" fill-rule="evenodd">
        <circle cx="16" cy="16" r="16" fill="#D8D8D8"/>
        <mask id="b32" fill="#fff">
            <use xlink:href="#a32"/>
        </mask>
        <use xlink:href="#a32" fill="#ECECEC"/>
        <circle cx="16.267" cy="2.933" r="14.667" fill="#FFF" fill-opacity=".4" mask="url(#b32)"/>
        <path fill="#FFF" fill-opacity=".649" d="M2.288 15.76c-.007.173-.01.346-.01.52 0 7.619 6.176 13.795 13.794 13.795 7.619 0 13.795-6.176 13.795-13.795 0-.174-.004-.347-.01-.52-.274 7.377-6.34 13.274-13.785 13.274-7.444 0-13.51-5.897-13.784-13.274Z" mask="url(#b32)"/>
        <g mask="url(#b32)">
            <g transform="translate(8 13.867)">
                <mask id="d" fill="#fff">
                    <use xlink:href="#c32"/>
                </mask>
                <use xlink:href="#c32" fill="#000"/>
                <circle cx="8.267" cy=".267" r="10.4" fill="#FFF" fill-opacity=".2" mask="url(#d)"/>
            </g>
        </g>
    </g>
</svg>`
}

function addEye24(rotation) {
  return `
  <svg class="googly-draggable" transform="rotate(${rotation})" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24">
    <defs>
        <circle id="a24" cx="12" cy="12" r="11.2"/>
        <circle id="c24" cx="6" cy="6" r="6"/>
    </defs>
    <g fill="none" fill-rule="evenodd">
        <circle cx="12" cy="12" r="12" fill="#D8D8D8"/>
        <mask id="b24" fill="#fff">
            <use xlink:href="#a24"/>
        </mask>
        <use xlink:href="#a24" fill="#ECECEC"/>
        <circle cx="12.2" cy="2.2" r="11" fill="#FFF" fill-opacity=".4" mask="url(#b24)"/>
        <path fill="#FFF" fill-opacity=".649" d="M1.716 11.82c-.005.13-.007.26-.007.39 0 5.714 4.632 10.346 10.345 10.346 5.714 0 10.346-4.632 10.346-10.346 0-.13-.002-.26-.007-.39-.205 5.533-4.756 9.955-10.339 9.955S1.921 17.353 1.716 11.82Z" mask="url(#b24)"/>
        <g mask="url(#b24)">
            <g transform="translate(6 10.4)">
                <mask id="d" fill="#fff">
                    <use xlink:href="#c24"/>
                </mask>
                <use xlink:href="#c24" fill="#000"/>
                <circle cx="6.2" cy=".2" r="7.8" fill="#FFF" fill-opacity=".2" mask="url(#d)"/>
            </g>
        </g>
    </g>
</svg>`
}

// CREATE DRAWER
function createDrawer() {
  const existingDrawer = document.querySelector('.googly-drawer');
  const existingEyes = document.querySelectorAll('.googly-draggable');

  if (existingDrawer) {
    existingDrawer.remove();
    existingEyes.forEach(eye => eye.remove());
    return;
  }

  let drawer = document.createElement('div');
  drawer.classList.add('googly-drawer');
  drawer.innerHTML = `
    <h1>Drag me onto the page!</h1>
    <div class="eye-grid">
      <div>
        ${addEye64(25)}
        ${addEye64(-25)}
      </div>
      <div>
        ${addEye64(30)}
        ${addEye64(-40)}
      </div>
      <div>
        ${addEye48(20)}
        ${addEye48(-20)}
      </div>
      <div>
        ${addEye48(35)}
        ${addEye48(-35)}
      </div>
      <div>
        ${addEye32(15)}
        ${addEye32(-15)}
      </div>
      <div>
        ${addEye32(40)}
        ${addEye32(-40)}
      </div>
      <div>
        ${addEye24(25)}
        ${addEye24(-25)}
      </div>
      <div>
        ${addEye24(5)}
        ${addEye24(-5)}
      </div>
    </div>
  `;
  
  console.log('drawer created');
  document.body.prepend(drawer);
  
  let googlyStyle = document.createElement('style');
  googlyStyle.textContent = `
    .googly-drawer {
      background-color: #fff;
      border: 1px solid #ccc;
      position: fixed;
      top: 0;
      right: 0;
      width: 200px;
      height: 100%;
      z-index: 99999999;
    }
    h1 {
      font-size: 20px;
      font-weight: normal;
      font-family: sans-serif;
      margin: 0;
      padding: 20px;
      text-align: center;
    }
    p {
      font-size: 12px;
      font-weight: normal;
      margin: 0;
      padding: 0 20px;
      text-align: center;
    }
    .eye-grid {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 48px;
      height: 100%;
    }
    .googly-draggable {
      cursor: move;
      z-index: 999999999;
    }
  `;
  
  drawer.appendChild(googlyStyle);
  
  // MAKE THE EYES DRAGGABLE
  const draggables = document.querySelectorAll('.googly-draggable');
  
  draggables.forEach(draggable => {
    // Add event listener for when user clicks on the element
    draggable.addEventListener('mousedown', function handleClick(event) {
      const clickedEye = event.currentTarget;
      const {x, y, width, height } = clickedEye.getBoundingClientRect();

      let targetEye = clickedEye;

      // Create a copy of the element
      if (!clickedEye.classList.contains('is-clone')) {
        targetEye = clickedEye.cloneNode(true);  
        targetEye.classList.add('is-clone');
      }
      
      // Set the position of the clone to be the same as the original element
      targetEye.style.position = 'absolute';
      targetEye.style.left = `${x}px`;
      targetEye.style.top = `${y}px`;

      // Add the clone to the webpage
      document.body.appendChild(targetEye);

      const handleMouseMove = (moveEvent) => {
        // Move the clone to the new position of the mouse
        targetEye.style.left = `${moveEvent.clientX - 0.5 * width}px`;
        targetEye.style.top = `${moveEvent.clientY + window.scrollY - 0.5 * height}px`;
      }

      // Add event listener for when user moves the mouse
      document.addEventListener('mousemove', handleMouseMove);
      // Add event listener for when user releases the mouse
      document.addEventListener('mouseup', function handleMouseUp() {
        // Remove the event listeners
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        targetEye.removeEventListener('mousedown', handleClick);
        targetEye.addEventListener('mousedown', handleClick);
      });
    });
  });
}

createDrawer();