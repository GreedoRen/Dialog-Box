import React, { Component } from 'react';
import Dialog from './Components/Dialog'

class App extends Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <div className="App">
        <button onClick={(e) => this.setState({isOpen: true})}>Open</button>

        <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen:false})}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis tempor elit, at vestibulum nunc. Fusce sodales lacus eget cursus consectetur. Etiam lacinia finibus purus, vitae egestas ante consequat eu. Mauris ornare lobortis enim, eu pulvinar elit rutrum eget. Curabitur at congue lectus. Sed felis leo, ultrices quis nunc at, fringilla tempor nibh. Ut urna quam, vulputate ac mollis vel, mollis in orci. Curabitur sit amet ultrices erat. Vivamus vel facilisis eros, in commodo diam. Cras aliquam leo quis ante molestie elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis laoreet dolor, eu dictum dui. Fusce id nisl ut enim vulputate finibus at vitae felis.

          Curabitur cursus suscipit placerat. Vestibulum non feugiat ante. Maecenas efficitur rutrum lacus, ut interdum nisi. Morbi in ex sed leo dapibus dignissim eu quis dui. Suspendisse vehicula, nisi quis iaculis lobortis, justo tellus facilisis lacus, vitae facilisis quam lectus ut libero. Fusce accumsan, dui eget aliquam interdum, odio libero tincidunt lorem, commodo maximus mi velit eget nunc. Vivamus molestie, sapien ut ullamcorper vulputate, neque orci laoreet sem, nec viverra eros nisi id risus. Nunc eu iaculis purus. Quisque varius suscipit lectus consequat tincidunt. In sit amet porttitor risus, quis placerat purus. Vestibulum lacus lectus, dictum eget lectus eget, hendrerit ultricies justo. Vestibulum tempus vehicula sapien. Pellentesque ut ornare est. Nam bibendum felis tincidunt consequat ornare. In aliquet ac tellus eget faucibus. Quisque sed purus mi.
        </ Dialog>
      </div>
    );
  }
}

export default App;
