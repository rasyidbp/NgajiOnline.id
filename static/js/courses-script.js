document.addEventListener('DOMContentLoaded', function() {
    // Function to handle price range filter
    function handlePriceRangeFilter() {
        const priceRange = document.getElementById('price-range');
        const priceValue = document.getElementById('price-value');
        
        priceRange.addEventListener('input', function() {
            priceValue.textContent = `Rp ${this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
        });
    }

    // Function to handle course filtering
    function handleCourseFiltering() {
        const filterInputs = document.querySelectorAll('.filter-sidebar input[type="checkbox"], #price-range');
        const courseCards = document.querySelectorAll('.course-card');

        filterInputs.forEach(input => {
            input.addEventListener('change', filterCourses);
        });

        function filterCourses() {
            const selectedLevels = Array.from(document.querySelectorAll('input[id^="level-"]:checked')).map(el => el.id.replace('level-', ''));
            const selectedCategories = Array.from(document.querySelectorAll('input[id^="cat-"]:checked')).map(el => el.id.replace('cat-', ''));
            const maxPrice = document.getElementById('price-range').value;

            courseCards.forEach(card => {
                const cardLevel = card.dataset.level;
                const cardCategory = card.dataset.category;
                const cardPrice = parseInt(card.dataset.price);

                const levelMatch = selectedLevels.length === 0 || selectedLevels.includes(cardLevel);
                const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(cardCategory);
                const priceMatch = cardPrice <= maxPrice;

                if (levelMatch && categoryMatch && priceMatch) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    }

    // Initialize functions
    handlePriceRangeFilter();
    handleCourseFiltering();
});