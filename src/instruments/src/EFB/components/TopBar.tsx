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
import styled, { css } from "styled-components";
import { IoIosBatteryFull } from "react-icons/io";
import { HiWifi } from "react-icons/hi";

export type BarProps = { bg?: string; textColor?: string; backdropFilter?: string };

export const TopBar: FC<BarProps> = ({ bg = "transparent", textColor = "white", backdropFilter = "none" }) => (
    <div>
        <StyledBar bg={bg} textColor={textColor} backdropFilter={backdropFilter}>
            <BarSection>
                <div>19:46</div>
                <div>Thu Dec 30</div>
            </BarSection>
            <BarSection symbols>
                <HiWifi style={{ transform: "scale(1.3)" }} />
                <div>100%</div>
                <IoIosBatteryFull style={{ transform: "scale(1.7)" }} />
            </BarSection>
        </StyledBar>
    </div>
);

const StyledBar = styled.div`
    width: 100%;
    height: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props: BarProps) => props.textColor};
    background-color: ${(props: BarProps) => props.bg};
    backdrop-filter: ${(props: BarProps) => props.backdropFilter};
    font-size: 20px;
    position: absolute;
    z-index: 999;
`;

const BarSection = styled.div`
    display: flex;
    gap: 16px;
    margin: 0 10px;
    align-items: center;

    ${(props: { symbols?: boolean }) =>
        props.symbols &&
        css`
            gap: 12px;
            margin: 0 16px;
        `}
`;
