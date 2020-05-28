import { ModelKind, GraphComponent } from '@patternfly/react-topology';
import Node from './DefaultNode';
import Edge from './DefaultEdge';
import MultiEdge from './MultiEdge';
import Group from './DefaultGroup';
import GroupHull from './GroupHull';

const defaultComponentFactory = (kind, type) => {
  switch (type) {
    case 'multi-edge':
      return MultiEdge;
    case 'group':
      return Group;
    case 'group-hull':
      return GroupHull;
    default:
      switch (kind) {
        case ModelKind.graph:
          return GraphComponent;
        case ModelKind.node:
          return Node;
        case ModelKind.edge:
          return Edge;
        default:
          return undefined;
      }
  }
};

export default defaultComponentFactory;
