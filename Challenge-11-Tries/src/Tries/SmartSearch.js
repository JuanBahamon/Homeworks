import { Node } from './TrieNode.js'
import { Trie } from './Trie.js'
import { MinHeap } from './MinHeap.js'

class SmartSearch {
    constructor() {
        this.trie = new Trie();
    }

    insert(name, popularity) {
        this.trie.insert(name);
        
        let current = this.trie.root;
        for (let char of name) {
            current = current.children[char];
        }
        current.product = { name, popularity };
    }

    searchTopK(prefix, k) {
        let current = this.trie.root;

        for (let char of prefix) {
            if (current.children[char] === undefined) {
                return [];
            }
            current = current.children[char];
        }

        const products = [];
        this.collect(current, products);

        const heap = new MinHeap();
        for (let product of products) {
            heap.push(product);
        }

        return heap.toArray()
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, k);
    }

    collect(node, products) {
        if (node.product) {
            products.push(node.product);
        }
        for (let char in node.children) {
            this.collect(node.children[char], products);
        }
    }
}

export { SmartSearch };