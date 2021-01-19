/**
 * Sort the works array based on the filter type
 *
 * @param   {array}   works  Elements to sort
 * @param   {string}  type   chosen sorting tag
 *
 * @return  {array}         sorted works
 */
const sortPhotographers = (works, type) => {
  if (type === "popularite") return works.sort((a, b) => b.likes - a.likes);
  if (type === "date")
    return works.sort((a, b) => new Date(b.date) - new Date(a.date));
  if (type === "titre") {
    return works.sort((a, b) => {
      const titleA = a.alt.toUpperCase();
      const titleB = b.alt.toUpperCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    });
  }
};

export { sortPhotographers };
