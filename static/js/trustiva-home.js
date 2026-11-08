
document.addEventListener('DOMContentLoaded', function () {

    const searchTabs = document.querySelectorAll(
        '.trustiva-search-card .search-tabs .tab'
    );

    const propertyTypeInput = document.getElementById(
        'trustiva-property-type'
    );

    searchTabs.forEach(function (tab) {

        tab.addEventListener('click', function () {

            // Remove active state from all tabs
            searchTabs.forEach(function (item) {
                item.classList.remove('active');
            });

            // Activate the selected tab
            tab.classList.add('active');

            // Update the Django search parameter
            propertyTypeInput.value = tab.dataset.propertyType;

        });

    });

});
