import Cart from "../service/Cart";
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";
import Movie from "../domain/Movie";


test("new card should be empty", () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test("totalSum count", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(new Movie(1010, "The Avengers", 500, "USA", 2012, "Avengers Assemble!", "фантастика, боевик", 137));
  let result = cart.totalSum();
  expect(result).toEqual(3400)
});

test("totalSum with discount", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(new Movie(1010, "The Avengers", 500, "USA", 2012, "Avengers Assemble!", "фантастика, боевик", 137));
  let result = cart.totalSumDiscount(15);
  expect(result).toEqual(2890)
});

test('delete one element', () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(new Movie(1010, "The Avengers", 500, "USA", 2012, "Avengers Assemble!", "фантастика, боевик", 137));
  cart.deleteItem(1008);
  let result = cart.items;
  expect(result.length).toEqual(2)
});