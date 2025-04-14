"use client";

import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from 'react';

export default function Page() {
    const initialProducts = [
        {
            id: 1,
            type: "acc",
            price: 100000,
            date: "2024-01-01",
            game: "Liên Quân",
            warranty: "7 ngày",
        },
        {
            id: 2,
            type: "acc",
            price: 200000,
            date: "2024-01-02",
            game: "Free Fire",
            warranty: "14 ngày",
        },
        {
            id: 3,
            type: "acc",
            price: 300000,
            date: "2024-01-03",
            game: "Tốc Chiến",
            warranty: "30 ngày",
        },
        {
            id: 4,
            type: "acc",
            price: 400000,
            date: "2024-01-04",
            game: "Genshin Impact",
            warranty: "60 ngày",
        },
        {
            id: 5,
            type: "acc",
            price: 500000,
            date: "2024-01-05",
            game: "Valorant",
            warranty: "90 ngày",
        },
        {
            id: 6,
            type: "acc",
            price: 600000,
            date: "2024-01-06",
            game: "Among Us",
            warranty: "120 ngày",
        },
        {
            id: 7,
            type: "acc",
            price: 700000,
            date: "2024-01-07",
            game: "Roblox",
            warranty: "30 ngày",
        },
        {
            id: 8,
            type: "acc",
            price: 800000,
            date: "2024-01-08",
            game: "Minecraft",
            warranty: "60 ngày",
        },
        {
            id: 9,
            type: "acc",
            price: 900000,
            date: "2024-01-09",
            game: "Apex Legends",
            warranty: "90 ngày",
        },
        {
            id: 10,
            type: "acc",
            price: 1000000,
            date: "2024-01-10",
            game: "Call of Duty",
            warranty: "120 ngày",
        },
        {
            id: 11,
            type: "acc",
            price: 1100000,
            date: "2024-01-11",
            game: "League of Legends",
            warranty: "7 ngày",
        },
        {
            id: 12,
            type: "acc",
            price: 1200000,
            date: "2024-01-12",
            game: "Counter-Strike",
            warranty: "14 ngày",
        },
        {
            id: 13,
            type: "acc",
            price: 1300000,
            date: "2024-01-13",
            game: "Overwatch",
            warranty: "30 ngày",
        },
        {
            id: 14,
            type: "acc",
            price: 1400000,
            date: "2024-01-14",
            game: "Fortnite",
            warranty: "60 ngày",
        },
        {
            id: 15,
            type: "acc",
            price: 1500000,
            date: "2024-01-15",
            game: "PUBG",
            warranty: "90 ngày",
        }
    ];

    const [products, setProducts] = useState(initialProducts);
    const [selectedGame, setSelectedGame] = useState<string | undefined>(undefined);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(5);

    const uniqueGames = [...new Set(products.map((product) => product.game))];

    useEffect(() => {
        setSelectedGame(undefined);
    }, []);

    const filteredProducts = products.filter((product) => {
        if (!selectedGame) {
            return true; // Show all products if no games are selected
        }
        return selectedGame === product.game;
    });

    // Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredProducts.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleProductsPerPageChange = (value: number) => {
        setProductsPerPage(Number(value));
        setCurrentPage(1); // Reset to first page when products per page changes
    };

    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="flex justify-end items-center">
    <Select
        onValueChange={(value) => {
            setSelectedGame(value);
        }}
    >
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Chọn tựa game" />
        </SelectTrigger>
        <SelectContent>
            {uniqueGames.map((game) => (
                <SelectItem key={game} value={game}>
                    {game}
                </SelectItem>
            ))}
        </SelectContent>
    </Select>
</div>

            <Table className="border">
                <TableHeader className="bg-secondary text-secondary-foreground">
                    <TableRow>
                        <TableHead className="font-bold">Loại Acc</TableHead>
                        <TableHead className="font-bold">Giá Tiền</TableHead>
                        <TableHead className="font-bold">Ngày Đăng</TableHead>
                        <TableHead className="font-bold">Tựa Game</TableHead>
                        <TableHead className="font-bold">Bảo Hành</TableHead>
                        <TableHead className="text-right font-bold">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentProducts.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell>{product.type}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>{product.date}</TableCell>
                            <TableCell>{product.game}</TableCell>
                            <TableCell>{product.warranty}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost">Mua</Button>
                                <Button variant="link">Xem chi tiết</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
              <p>Trang {currentPage} / {pageNumbers.length}</p>
                <Select
                  onValueChange={(value) => {
                    handleProductsPerPageChange(Number(value));
                  }}
                >
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder={`${productsPerPage} trên trang`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 trên trang</SelectItem>
                    <SelectItem value="10">10 trên trang</SelectItem>
                    <SelectItem value="15">15 trên trang</SelectItem>
                    <SelectItem value="20">20 trên trang</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Lùi
                </Button>
                <Button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === pageNumbers.length}
                >
                  Tiếp
                </Button>
              </div>
            </div>
          </div>
    );
}
