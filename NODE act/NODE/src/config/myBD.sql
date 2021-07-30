create view vfavorites as 
select B.ID,B.Name,B.Publisher,B.Category,B.Descrition,B.Year,F.ID from FAVORITES F
right join  BOARDGAMES B on F.IdBoardgame = B.ID;