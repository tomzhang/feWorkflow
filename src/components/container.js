import ListFolder from './list/list';
import Dropzone from './layout/dropzone';
import ContainerEmpty from './container-empty';
import ContainerFt from './layout/container-ft';
import Aside from './layout/aside';
import { connect } from 'react-redux';

const Container = ({lists}) => {
  if (!lists.size) {
    return (
      <div>
        <ContainerEmpty />
        <Dropzone />
        <ContainerFt />
        <Aside />
      </div>
    )
  } else {
    return (
      <div className="container">
        <div className="container-bd">
          <ListFolder />
          <Dropzone />
        </div>
        <ContainerFt />
        <Aside />
      </div>
    )
  }
};

function mapStateToProps(states) {
 return {
   lists: states.lists
 }
}

export default connect(mapStateToProps)(Container);
