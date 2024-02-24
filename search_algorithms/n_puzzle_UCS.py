import heapq

"""
Puzzle class to represent the n-puzzle problem.
Cao Xuan Nguyen
"""


class Puzzle:
    def __init__(self, board, n, moves=0):
        # 1D representation of the board : [0, 1, 2, 3, 4, 5, 6, 7, 8]
        self.board = board
        # n is the size of the board (n x n)
        self.n = n
        # number of moves to reach the current state, default is 0
        self.moves = moves
        # index of the empty cell, we will treat 0 as the empty cell
        self.empty = board.index(0)

    #
    def move(self, delta):
        """
        index of the new empty cell
        example : [1, 0, 2, 3, 4, 5, 6, 7, 8] -> [0, 1, 2, 3, 4, 5, 6, 7, 8] (delta = -1) -> index = 1 + (-1) = 0
        """
        index = self.empty + delta
        """
        define a valid move 
        threre are 2 conditions:
        - the new empty cell is within the board 
        - the new empty cell is next to the current empty cell: 
            + the manhattan distance between the new empty cell and the current empty cell is 1
            + the formula to calculate the manhattan distance between 2 cells is:
                |x2 - x1|                  + |y2 - y1| 
                abs(cell1 % n - cell2 % n) + abs(cell1 // n - cell2 // n)
        - 
        """
        if (
            0 <= index < len(self.board)
            and abs(self.empty % self.n - index % self.n)
            + abs(self.empty // self.n - index // self.n)
            == 1
        ):
            # create a new copy of the board
            board = self.board[:]
            # swap the empty cell with the new cell
            board[self.empty], board[index] = board[index], board[self.empty]
            # return the new state
            return Puzzle(board, self.n, self.moves + 1)
        # return None if the move is invalid
        return None

    """
    get the valid moves from the current state
    example: 
    [1, 0, 2,         [1, 4, 2, 
     3, 4, 5,    =>    3, 0, 5,
     6, 7, 8]          6, 7, 8]
    0 is moved down -> the index of 0 is plused by n 
    """

    def get_moves(self):
        moves = []
        """
        4 possible moves: up, down, left, right
        left: -1, 
        right: 1, 
        up: -n,
        down: n
        """
        deltas = [-1, 1, -self.n, self.n]

        for delta in deltas:
            move_result = self.move(delta)
            # check if the move is valid
            if move_result is not None:
                moves.append(move_result)

        # return the valid moves
        return moves

    # check if the current state is the goal state
    def is_goal(self, other):
        return self.board == other

    # the goal state is the numbers from 0 to n*n - 1 in the increasing order
    def goal_state(self):
        return list(range(self.n * self.n))

    # define the comparison between 2 states based on the number of moves
    def __lt__(self, other):
        return self.moves < other.moves

    # create a table from the input
    @classmethod
    def create_table(cls, n, lst):
        # flatten the list
        flat_list = [item for sublist in lst for item in sublist]
        # return a new instance of the class -> we use cls
        return cls(flat_list, n)

    # insert the data
    @classmethod
    def insert_data(cls):
        n = int(input("Enter the number n: "))
        lst = [
            int(input(f"Enter the number at the position [{i//n}][{i%n}]: "))
            for i in range(n * n)
        ]
        return cls.create_table(n, lst)

    # draw the table
    def draw_table(self):
        for i in range(0, len(self.board), self.n):
            print(self.board[i : i + self.n])


"""
uniform cost search algorithm
using dijkstra algorithm to find the shortest path
"""
def ucs(start, goal):
    # use a priority queue to store the states
    heap = [(0, start)]
    # use a set to store the visited states -> avoid the infinite loop
    visited = set()

    # while the priority queue is not empty
    while heap:
        # get the state with the smallest cost
        cost, puzzle = heapq.heappop(heap)

        # check if the state is the goal state
        if puzzle.is_goal(goal):
            return cost

        # check if the state is visited -> if yes, skip the state
        if str(puzzle.board) in visited:
            continue

        # add the state to the visited set
        visited.add(str(puzzle.board))

        # add the valid moves to the priority queue
        for move in puzzle.get_moves():
            heapq.heappush(heap, (cost + 1, move))

    return None


if __name__ == "__main__":
    p = Puzzle.insert_data()
    print("The table is:")
    p.draw_table()

    result = ucs(p, p.goal_state())

    if result is not None:
        print("Number of moves to reach the goal:", result)
    else:
        print("No path found to the goal state.")
