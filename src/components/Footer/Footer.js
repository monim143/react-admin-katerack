import React from 'react';
const footer = ( props ) => (
<footer class="footer">
© {new Date().getFullYear() - 1} - {new Date().getFullYear()} katerack <span class="text-muted d-none d-sm-inline-block float-right">Crafted with <i class="mdi mdi-heart text-danger"></i> by MA Monim</span>
</footer>
);

export default footer;