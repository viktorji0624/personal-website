"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";

type SampleProjectsSectionProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function SampleProjectsSection(
  props: SampleProjectsSectionProps
) {
  return (
    <section className="mb-10" id="academics">
      <h2 className="flex flex-row text-2xl font-semibold mb-4 border-b pb-1 border-gray-200">
        Sample Academic Projects{" "}
        <button
          onClick={() => props.setIsOpen(!props.isOpen)}
          className="flex items-center ml-5 text-sm text-blue-500 hover:text-blue-700 transition"
        >
          {props.isOpen ? (
            <ChevronDown size={32} />
          ) : (
            <ChevronRight size={32} />
          )}
          <span className="ml-1">
            {props.isOpen ? "Hide Projects" : "Show Projects"}
          </span>
        </button>
      </h2>

      {props.isOpen && (
        <div className="flex flex-wrap space-x-10 space-y-5">
          <div className="flex flex-col">
            <span className="text-xl font-medium ">Mini-Blog </span>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-400 ">
                EECS 485, University of Michigan
              </p>{" "}
              <Image
                src="/UMICH.jpg"
                className="w-5 h-5"
                alt="UMICH LOGO"
                width={20}
                height={20}
              />{" "}
            </div>

            <ul className="list-disc list-inside mt-1">
              <li>
                Implemented a local server that handles REST API requests and
                returns the corresponding information in json format, utilizing
                Python’s Flask library as the backend.
              </li>
              <li>
                Enabled information retrieval and storage using the local server
                with sqlite as the database
              </li>
              <li>
                Implemented and designed the frontend of the website as well as
                the interface, using client-side Javascript to handle
                interactions with individual posts such as commenting, liking or
                following.
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-medium">
              Map-Reduce and Mini Search-engine
            </span>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-400 ">
                EECS 485, University of Michigan
              </p>{" "}
              <Image
                src="/UMICH.jpg"
                className="w-5 h-5"
                alt="UMICH LOGO"
                width={20}
                height={20}
              />{" "}
            </div>
            <ul className="list-disc list-inside mt-1">
              <li>
                Implemented a multi-threaded and fault-tolerant mapreduce
                program that takes inputs from python sockets. Uses round-robin
                partitioning to parse inputs with python subprocess
              </li>
              <li>
                Simulated information retrieval of search engines efficiently
                using the mapreduce program. Using PageRank and HITS algorithms
                to display the best matching results based on user input,
                referencing the values of the inverted index constructed
                beforehand.
              </li>
              <li>
                Implemented shell scripts to automate the process of building an
                inverted index.
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-medium">
              LC-2K Assembly Simulator{" "}
            </span>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-400 ">
                EECS 370, University of Michigan
              </p>{" "}
              <Image
                src="/UMICH.jpg"
                className="w-5 h-5"
                alt="UMICH LOGO"
                width={20}
                height={20}
              />{" "}
            </div>
            <ul className="list-disc list-inside mt-1">
              <li>
                Translated assembly instructions into machine code with load,
                store, branch and binary operations.
              </li>
              <li>
                Implemented instruction pipelining which resolves data hazards
                and control hazards
              </li>
              <li>
                {" "}
                Implemented a Cache with a write policy of write-back and
                allocate on write, replacing the least recently used memory in
                case of collision and eviction.
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-medium">
              Quality Assurance and Defect Detector{" "}
            </span>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-400 ">
                EECS 481, University of Michigan
              </p>
              <Image
                src="/UMICH.jpg"
                className="w-5 h-5"
                alt="UMICH LOGO"
                width={20}
                height={20}
              />
            </div>
            <ul className="list-disc list-inside mt-1">
              <li>
                Implemented a mutator that ranks the qualities of test suites by
                instrumenting the input python program’s AST with random first
                or higher order mutations.
              </li>
              <li>
                Implemented Delta-Debugging to find the minimal subset of code
                changes that causes defects.
              </li>
              <li>
                Computed the probability of a line of code being defective using
                Ochiai and Tarantula algorithms.
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-medium">Simulators</span>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-400 ">
                EECS 281, University of Michigan
              </p>
              <Image
                src="/UMICH.jpg"
                className="w-5 h-5"
                alt="UMICH LOGO"
                width={20}
                height={20}
              />
            </div>
            <ul className="list-disc list-inside mt-1">
              <li>
                Maze Runner - Implemented a depth-first search algorithm to
                traverse a 2-D maze containing traps and triggers, determining
                whether or not a solution exists and outputs the entire path if
                it does.
              </li>
              <li>
                Drone Delivery Simulation - Computed the most efficient paths to
                traverse a set of coordinates with given constraints and costs,
                adapting Heuristics (branch and bound), Flyod-Warshall, and
                Kruskal algorithms to produce the desired output depending on
                the request.
              </li>
              <li>
                Stock Market - Implemented a program that automatically makes
                profitable stock trades in real-time given a log of
                transactions, utilizing priority queues and transition states to
                aid its decision making.
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-medium">Game Development</span>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-400 ">
                EECS 183 & 280, University of Michigan
              </p>
              <Image
                src="/UMICH.jpg"
                className="w-5 h-5"
                alt="UMICH LOGO"
                width={20}
                height={20}
              />
            </div>
            <ul className="list-disc list-inside mt-1">
              <li>
                Developed a mini fruit-catcher game on Arduino in C++. Designed
                a difficulty scaling algorithmn that makes the game increasingly
                chanllenging over time alongside a high-score record system.
              </li>
              <li>
                Developed a card simulator game that plays Euchre with basic
                programmed AI opponents.
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
