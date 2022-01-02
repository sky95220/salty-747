/**
 * Salty 74S
 * Copyright (C) 2021 Salty Simulations and its contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React, { FC } from "react";
import { render } from "../Common";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { TopBar } from "./components/TopBar";
import { HomeScreen } from "./apps/Home";
import { Maps } from "./apps/Maps";

import "./index.scss";

const EFB: FC = () => {
    return (
        <>
            <MemoryRouter>
                <TopBar />
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/maps" element={<Maps />} />
                </Routes>
            </MemoryRouter>
        </>
    );
};

render(<EFB />);
