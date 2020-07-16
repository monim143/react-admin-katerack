import React from 'react';

const footer = ( props ) => (
<footer className="footer">
©{new Date().getFullYear()} Katerack <span className="text-muted d-none d-sm-inline-block float-right">Crafted with <i className="mdi mdi-heart text-danger"></i> by MA Monim</span>
</footer>
);

export default footer;
