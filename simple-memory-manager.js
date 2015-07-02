// Code Wars
// Simple Memory Manager problem

/**
 * @constructor Creates a new memory manager for the provided array.
 * @param {memory} An array to use as the backing memory.
 */
function MemoryManager(memory){
  this.memory = memory;

  // create array of size equal to size of memory array to track allocation of blocks
  this.allocations = new Array(memory.length);
  // fill it with 0 values to indicate that blocks are free
  for (var i = 0; i < this.allocations.length; i++) {
    this.allocations[i] = 0;
  }
}

/**
 * Allocates a block of memory of requested size.
 * @param {number} size - The size of the block to allocate.
 * @returns {number} A pointer which is the index of the first location in the allocated block.
 * @throws If it is not possible to allocate a block of the requested size.
 */
MemoryManager.prototype.allocate = function(size){

  // check to see if size is greater than the length of the memory array
  if (size > this.memory.length) {
    // if so then throw an exception
    throw 'Size of blocks to allocate is larger than the available memory';
  }

  // track current index of array
  var currIndex = 0;
  // track first free block of memory in current search 
  var firstFreeIndex = -1;

  // start at the beginning of the allocations array
  while (currIndex < this.allocations.length) {
    // check if block is free
    if (this.allocations[currIndex] === 0) {
      // if so check to see if this is the first free block in our sequence
      if (firstFreeIndex === -1) {
        firstFreeIndex = currIndex;
      }

      // check to see if our set of allocated blocks is equal to the passed in size
      if ((currIndex - firstFreeIndex + 1) === size) {

        // if so then allocate all of the blocks from first free index to current index in the allocations array
        for (var i = firstFreeIndex; i <= currIndex; i++) {
          this.allocations[i] = 1;
        }

        // break out of the while loop
        break;
        
      } else {
        // if we haven't allocated enough blocks yet then increment currIndex
        currIndex++;
      }
    } else {
      // otherwise we need to reset first free index and move up the current index
      firstFreeIndex = -1;
      currIndex++;
    }
  }

  if (firstFreeIndex !== -1) {
    // return the first free index
    return firstFreeIndex;
  }
  
  // if there is no sequential block of memory available then throw an exception
  throw 'Cannot allocate enough free memory blocks';
};

/**
 * Releases a previously allocated block of memory.
 * @param {number} pointer - The pointer to the block to release.
 * @throws If the pointer does not point to an allocated block.
 */
MemoryManager.prototype.release = function(pointer){
  
  // check to see if the block at the specified pointer is allocated
  if (this.allocations[pointer] === 1) {
    // if so then free it
    this.allocations[pointer] = 0;
  } else {
    // else throw an exception
    throw 'Block of memory is not allocated';
  }
};

/**
 * Reads the value at the location identified by pointer
 * @param {number} pointer - The location to read.
 * @returns {number} The value at that location.
 * @throws If pointer is in unallocated memory.
 */
MemoryManager.prototype.read = function(pointer){
  
  // check to see if the block at the specified pointer is allocated
  if (this.allocations[pointer] === 1) {
    // if so then return the value stored there
    return this.memory[pointer];
  }
  // else throw an exception
  throw 'Block of memory is not allocated';
}

/**
 * Writes a value to the location identified by pointer
 * @param {number} pointer - The location to write to.
 * @param {number} value - The value to write.
 * @throws If pointer is in unallocated memory.
 */
MemoryManager.prototype.write = function(pointer, value){

  // check to see if the block at the specified pointer is allocated
  if (this.allocations[pointer] === 1) {
    // if so then write the value to that block
    this.memory[pointer] = value;
    
  } else {
    // else throw an exception
    throw 'Block of memory is not allocated';
  }
}

// test
var array = new Array(16);
var memoryManager = new MemoryManager(array);
var pointer = memoryManager.allocate(8);
var expected = 'a',
    actual;
memoryManager.write(pointer, expected);
actual = memoryManager.read(pointer);

console.log('Expect read data to equal written data:', actual === expected); // true
console.log('Expect written value to be at correct location in memory array:', expected === array[pointer]); // true
