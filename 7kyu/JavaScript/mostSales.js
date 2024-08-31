/*
You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:

products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399]
return the three product names with the highest revenue (amount * price).

Note: if multiple products have the same revenue, order them according to their original positions in the input list.
*/

function top3(products, amts, prices) {
    // array of objects
    const revenue = products.map((product, i) => {
      return {
        name: product,
        revenue: amts[i] * prices[i],
        index: i
      }
    })
    // sort by revenue in ascending order. if two revenues are the same, sort by which was first
    const sorted = revenue.sort((a, b) => b.revenue - a.revenue || a.index - b.index)
    // make array of top 3
    return sorted.slice(0, 3).map(obj => obj.name)
  };