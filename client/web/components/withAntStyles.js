import withStyles from "isomorphic-style-loader/withStyles";

// Styles includes
// Include just the styles you are using in your project.
// You'll have to remember to add new ones as you go along
import antdStyles from "antd/lib/style/index.less";
import layoutStyles from "antd/lib/layout/style/index.less";
import gridStyles from "antd/lib/grid/style/index.less";

import badgeStyles from "antd/lib/badge/style/index.less";
import uploadStyles from "antd/lib/upload/style/index.less";

function withAntStyles(AntStyledComponent) {
  return withStyles(antdStyles, layoutStyles, gridStyles, ...badgeStyles, uploadStyles)(AntStyledComponent);
}

export default withAntStyles;
